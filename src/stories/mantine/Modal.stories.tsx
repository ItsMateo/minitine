import { Button, Stack, TextInput } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { Meta, StoryFn } from "@storybook/react-vite";
import { FormModal } from "../../patterns/FormModal";

const meta = {
	title: "Mantine/Modal",
	parameters: { controls: { disable: true } },
} satisfies Meta;

export default meta;

export const Default: StoryFn = () => {
	const [opened, { open, close }] = useDisclosure(false);

	return (
		<>
			<FormModal
				opened={opened}
				onClose={close}
				title="Example modal"
				description="Short helper copy sits in the body, not a separate header band."
				footer={
					<>
						<Button
							variant="default"
							onClick={close}
						>
							Cancel
						</Button>
						<Button onClick={close}>Save</Button>
					</>
				}
			>
				<Stack gap="sm">
					<TextInput
						label="Name"
						placeholder="Enter your name"
					/>
				</Stack>
			</FormModal>
			<Button onClick={open}>Open modal</Button>
		</>
	);
};
