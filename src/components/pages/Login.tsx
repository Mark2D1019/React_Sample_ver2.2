//　ログオン画面を作成　AtomicDesign
import { Box, Stack, Divider, Flex, Heading, Input } from "@chakra-ui/react";
import { memo, VFC } from "react";

import { PrimaryButton } from "../atoms/button/PrimaryButton";

export const Login: VFC = memo(() => {
	return (
		<Flex align="center" justify="center" height="100vh">
			<Box bg="white" w="sm" p={4} borderRadius="md" shadow="md">
				<Heading as="h1" size="lg" textAlign="center">
					ユーザ管理アプリ
				</Heading>
				<Divider my={4} />
				<Stack spacing={6} py={4} px={10}>
					<Input placeholder="ユーザID" />
					<PrimaryButton>ログイン</PrimaryButton>
				</Stack>
			</Box>
		</Flex>
	);
});