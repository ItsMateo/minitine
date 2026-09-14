import { Box, type BoxProps } from "@mantine/core";

export function Spacer({ ...props }: BoxProps) {
	return (
		<Box
			style={{ flex: 1 }}
			{...props}
		/>
	);
}
