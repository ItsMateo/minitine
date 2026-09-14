import { Center, Loader, Stack, Text } from "@mantine/core";

export interface LoadingStateProps {
	label?: string;
}

export function LoadingState({ label = "Loading" }: LoadingStateProps) {
	return (
		<Center mih={200}>
			<Stack
				align="center"
				gap="sm"
			>
				<Loader
					size="sm"
					color="gray"
				/>
				<Text
					size="sm"
					c="dimmed"
				>
					{label}
				</Text>
			</Stack>
		</Center>
	);
}
