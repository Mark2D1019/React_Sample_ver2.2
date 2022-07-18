import { VFC, memo } from "react";
// import { render } from "react-dom";
import { Route, Routes } from "react-router-dom";

import { Login } from "../components/pages/Login";
import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagement";
import { Page404 } from "../components/pages/Page404";
import { HeaderLayout } from "../components/templates/HeaderLayout";

// import { homeRoutes } from "./HomeRoutes";

export const Router: VFC = memo(() => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
			<Route path="/home" element={<HeaderLayout />}>
				<Route path="/home" element={<Home />} />
				<Route path="/home/setting" element={<Setting />} />
				<Route path="/home/usermanagement" element={<UserManagement />} />
			</Route>
			<Route path="*" element={<Page404 />} />
		</Routes>
	);
});
