// import { memo, ReactNode, VFC } from "react";

import { memo, VFC } from "react";

import { Header } from "../organisms/layout/Header";
import { Outlet } from "react-router-dom";

// type Props = {
// 	children: ReactNode;
// };
// export const HeaderLayout: VFC<Props> = memo((props) => {
// const { children } = props;
export const HeaderLayout: VFC = memo(() => {
	return (
		<>
			<Header />
			{/* {children} */}
			<Outlet />
		</>
	);
});
