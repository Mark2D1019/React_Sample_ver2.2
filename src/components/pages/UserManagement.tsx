import { Wrap, WrapItem } from "@chakra-ui/react";
import { memo, useEffect, VFC } from "react";

import { UserCard } from "../organisms/user/UserCard";
import { useAllUsers } from "../../hooks/useAllUsers";

export const UserManagement: VFC = memo(() => {
	const{getUsers, loading, users} =useAllUsers();

	//初回表示時に一度だけ動作させる機能
useEffect(())

	return (
		<Wrap p={{ base: 4, md: 10 }}>
			<WrapItem>
				<UserCard
					imageUrl="https://source.unsplash.com/random"
					userName="test2"
					fullName="masao2"
				/>
			</WrapItem>
		</Wrap>
	);
});
