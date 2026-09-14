import { Alert, type AlertProps } from "@mantine/core";

export type ErrorStateProps = AlertProps;

export function ErrorState(props: ErrorStateProps) {
	return (
		<Alert
			color="red"
			{...props}
		/>
	);
}
