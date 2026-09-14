import { Group, Modal, type ModalProps, Stack, Text } from "@mantine/core";
import type { ReactNode } from "react";

export interface FormModalProps
	extends Pick<ModalProps, "opened" | "onClose" | "title" | "size" | "centered"> {
	description?: ReactNode;
	children: ReactNode;
	footer?: ReactNode;
}

export function FormModal({
	opened,
	onClose,
	title,
	description,
	children,
	footer,
	size = "sm",
	centered = true,
}: FormModalProps) {
	return (
		<Modal
			opened={opened}
			onClose={onClose}
			title={title}
			size={size}
			centered={centered}
		>
			<Stack gap="md">
				{description ? (
					<Text
						size="sm"
						c="dimmed"
						lh={1.5}
					>
						{description}
					</Text>
				) : null}
				{children}
				{footer ? (
					<Group
						justify="flex-end"
						gap="sm"
					>
						{footer}
					</Group>
				) : null}
			</Stack>
		</Modal>
	);
}
