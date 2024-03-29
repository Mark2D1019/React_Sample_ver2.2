//カスタムフックはロジック機能。https://qiita.com/cheez921/items/af5878b0c6db376dba
import axios from "axios";
import { useCallback, useState } from "react";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";

export const useAllUsers = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const [users, setUsers] = useState<Array<User>>();
	const { showMessage } = useMessage();
	//useCallbackは再生成されない（レンダリングの負荷を減らす）目的で使用。
	const getUsers = useCallback(() => {
		setLoading(true);
		axios
			.get<Array<User>>(`https://jsonplaceholder.typicode.com/users/`)
			.then((res) => setUsers(res.data))
			.catch(() => {
				showMessage({ title: "ユーザ取得に失敗しました", status: "error" });
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return { getUsers, loading, users };
};
