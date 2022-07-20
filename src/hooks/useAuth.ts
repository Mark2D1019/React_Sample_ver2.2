import axios from "axios";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

import { User } from "../types/api/user";
import { useMessage } from "./useMessage";
export const useAuth = () => {
	//画面遷移のための関数
	const navigate = useNavigate();
	//関数呼び出し
	const { showMessage } = useMessage();
	//ステータスを管理する関数
	const [loading, setLoading] = useState(false);
	const login = useCallback((id: String) => {
		// console.log(id);
		setLoading(true);
		axios
			//遷移先URLはダブルコーテーションではなくバックコーテーション
			.get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
			.then((res) => {
				if (res.data) {
					showMessage({ title: "ログオンできました", status: "success" });
					navigate("/home");
					console.log(res.data);
				} else {
					showMessage({ title: "ユーザが見つかりません", status: "warning" });
				}
			})
			.catch((error) => {
				showMessage({ title: "ログオンできません", status: "error" });
				if (error.response) {
					console.log(error.response.data);
					console.log(error.response.status);
					console.log(error.response.headers);
				} else if (error.request) {
					console.log(error.request);
				} else {
					console.log("Error", error.message);
				}
			})
			.finally(() => {
				setLoading(false);
			});
	}, []);
	return { login, loading };
};
