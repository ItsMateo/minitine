import { Table } from "@mantine/core";
import type { Meta, StoryObj } from "@storybook/react-vite";

const rows = [
	{ name: "Carbon", symbol: "C", number: 6, mass: 12.011 },
	{ name: "Nitrogen", symbol: "N", number: 7, mass: 14.007 },
	{ name: "Oxygen", symbol: "O", number: 8, mass: 15.999 },
	{ name: "Fluorine", symbol: "F", number: 9, mass: 18.998 },
	{ name: "Neon", symbol: "Ne", number: 10, mass: 20.18 },
];

const meta = {
	title: "Mantine/Table",
	component: Table,
	argTypes: {
		striped: { control: "boolean" },
		highlightOnHover: { control: "boolean" },
		withTableBorder: { control: "boolean" },
		withColumnBorders: { control: "boolean" },
		children: { table: { disable: true } },
	},
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		children: (
			<>
				<Table.Thead>
					<Table.Tr>
						<Table.Th>Element</Table.Th>
						<Table.Th>Symbol</Table.Th>
						<Table.Th>Atomic Number</Table.Th>
						<Table.Th>Mass</Table.Th>
					</Table.Tr>
				</Table.Thead>
				<Table.Tbody>
					{rows.map((row) => (
						<Table.Tr key={row.name}>
							<Table.Td>{row.name}</Table.Td>
							<Table.Td>{row.symbol}</Table.Td>
							<Table.Td>{row.number}</Table.Td>
							<Table.Td>{row.mass}</Table.Td>
						</Table.Tr>
					))}
				</Table.Tbody>
			</>
		),
	},
};

export const Striped: Story = {
	args: {
		...Default.args,
		striped: true,
	},
};

export const Interactive: Story = {
	args: {
		...Default.args,
		striped: true,
		highlightOnHover: true,
		withTableBorder: true,
		withColumnBorders: true,
	},
};
