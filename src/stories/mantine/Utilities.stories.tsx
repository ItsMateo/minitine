import {
	Box,
	Button,
	Card,
	DirectionProvider,
	FloatingIndicator,
	FloatingWindow,
	FocusTrap,
	Group,
	Modal,
	ModalBase,
	ModalBaseBody,
	ModalBaseCloseButton,
	ModalBaseContent,
	ModalBaseOverlay,
	ModalBaseTitle,
	Overlay,
	Paper,
	Portal,
	Stack,
	Text,
	TextInput,
	UnstyledButton,
	VisuallyHidden,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";

const meta = {
	title: "Mantine/Utilities",
	parameters: { layout: "padded", controls: { disable: true } },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Overlays: Story = {
	render: function Render() {
		const [opened, { open, close }] = useDisclosure(false);

		return (
			<Stack gap="lg">
				<Box
					pos="relative"
					h={120}
				>
					<Card
						padding="md"
						h="100%"
					>
						<Text size="sm">Content behind an Overlay</Text>
					</Card>
					<Overlay
						backgroundOpacity={0.6}
						blur={2}
						radius="sm"
					>
						<Group
							justify="center"
							align="center"
							h="100%"
						>
							<Text
								size="sm"
								fw={600}
							>
								Locked
							</Text>
						</Group>
					</Overlay>
				</Box>
				<Group>
					<Button onClick={open}>Open Mantine Modal</Button>
				</Group>
				<Modal
					opened={opened}
					onClose={close}
					title="Mantine Modal"
				>
					<Text size="sm">
						The raw Mantine component, themed by Minitine's Modal defaults.
					</Text>
				</Modal>
			</Stack>
		);
	},
};

export const Headless: Story = {
	name: "ModalBase",
	render: function Render() {
		const [opened, { open, close }] = useDisclosure(false);

		return (
			<>
				<Button
					variant="default"
					onClick={open}
				>
					Open ModalBase
				</Button>
				<ModalBase
					opened={opened}
					onClose={close}
					size="sm"
				>
					<ModalBaseOverlay backgroundOpacity={0.6} />
					<ModalBaseContent
						innerProps={{
							style: {
								position: "fixed",
								inset: 0,
								display: "flex",
								alignItems: "center",
								justifyContent: "center",
							},
						}}
					>
						<Paper w={360}>
							<Group
								justify="space-between"
								align="center"
								px="lg"
								pt="lg"
								pb="md"
								style={{ borderBottom: "1px solid var(--minitine-color-border)" }}
							>
								<ModalBaseTitle
									fz="md"
									fw={600}
									lh={1.35}
									m={0}
								>
									Unstyled base
								</ModalBaseTitle>
								<ModalBaseCloseButton c="dimmed" />
							</Group>
							<ModalBaseBody p="lg">
								<Stack gap="md">
									<Text size="sm">
										ModalBase ships behavior only — focus trap, scroll lock, and
										transitions. Chrome is yours.
									</Text>
									<Group justify="flex-end">
										<Button
											size="compact-sm"
											onClick={close}
										>
											Close
										</Button>
									</Group>
								</Stack>
							</ModalBaseBody>
						</Paper>
					</ModalBaseContent>
				</ModalBase>
			</>
		);
	},
};

export const Indicator: Story = {
	name: "FloatingIndicator",
	render: function Render() {
		const [rootRef, setRootRef] = useState<HTMLDivElement | null>(null);
		const [controls, setControls] = useState<Record<string, HTMLButtonElement | null>>({});
		const [active, setActive] = useState("board");

		// Change the same object. Then the ref callback does not start a render loop.
		const setControlRef = (value: string) => (node: HTMLButtonElement | null) => {
			controls[value] = node;
			setControls(controls);
		};

		return (
			<Group
				ref={setRootRef}
				gap={4}
				p={4}
				pos="relative"
				bdrs="sm"
				bg="var(--minitine-color-surface-raised)"
				w="fit-content"
			>
				{["board", "inbox", "activity"].map((value) => (
					<UnstyledButton
						key={value}
						ref={setControlRef(value)}
						onClick={() => setActive(value)}
						px={12}
						py={6}
						fz="sm"
						style={{ position: "relative", zIndex: 1, textTransform: "capitalize" }}
					>
						{value}
					</UnstyledButton>
				))}
				<FloatingIndicator
					target={controls[active]}
					parent={rootRef}
					style={{
						background: "var(--minitine-color-card-hover)",
						borderRadius: "var(--minitine-radius-sm)",
					}}
				/>
			</Group>
		);
	},
};

export const Window: Story = {
	name: "FloatingWindow",
	tags: ["!autodocs"],
	render: () => (
		<FloatingWindow
			withBorder
			shadow="md"
			w={240}
			initialPosition={{ top: 120, left: 120 }}
			dragHandleSelector="[data-drag-handle]"
		>
			<Group
				data-drag-handle
				px="sm"
				py={6}
				justify="space-between"
				style={{ cursor: "grab" }}
			>
				<Text
					size="sm"
					fw={600}
				>
					Drag me
				</Text>
			</Group>
			<Text
				size="sm"
				c="dimmed"
				px="sm"
				pb="sm"
			>
				A draggable Paper, positioned in the viewport.
			</Text>
		</FloatingWindow>
	),
};

export const Accessibility: Story = {
	tags: ["!autodocs"],
	render: () => (
		<Stack
			gap="lg"
			maw={420}
		>
			<FocusTrap active>
				<Paper p="md">
					<Stack gap="sm">
						<Text
							size="sm"
							fw={600}
						>
							FocusTrap
						</Text>
						<TextInput
							placeholder="Focus starts here"
							data-autofocus
						/>
						<Button size="compact-sm">Submit</Button>
					</Stack>
				</Paper>
			</FocusTrap>
			<Text size="sm">
				This sentence has a hidden suffix for screen readers.
				<VisuallyHidden> Read aloud but never painted.</VisuallyHidden>
			</Text>
			<Portal>
				<Box
					pos="fixed"
					bottom={12}
					left={12}
					p="xs"
					bdrs="sm"
					bg="var(--minitine-color-surface-raised)"
					style={{ border: "1px solid var(--minitine-color-border)" }}
				>
					<Text size="xs">Rendered through a Portal into document.body</Text>
				</Box>
			</Portal>
		</Stack>
	),
};

export const Direction: Story = {
	name: "DirectionProvider",
	render: () => (
		<DirectionProvider
			initialDirection="rtl"
			detectDirection={false}
		>
			<Paper
				p="md"
				maw={420}
				dir="rtl"
			>
				<Stack gap="sm">
					<Text size="sm">‏كل شيء داخل هذا الإطار يُعرض من اليمين إلى اليسار.</Text>
					<Group justify="flex-end">
						<Button
							variant="default"
							size="compact-sm"
						>
							إلغاء
						</Button>
						<Button size="compact-sm">حفظ</Button>
					</Group>
				</Stack>
			</Paper>
		</DirectionProvider>
	),
};
