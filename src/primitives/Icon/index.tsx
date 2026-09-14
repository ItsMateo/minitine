import { Box, type BoxProps } from "@mantine/core";
import type { LucideProps } from "lucide-react";
import type { FC } from "react";

const ICON_SIZES: Record<string, number> = {
	xs: 14,
	sm: 16,
	md: 18,
	lg: 20,
	xl: 24,
};

export interface IconProps extends BoxProps {
	icon: FC<LucideProps>;
	size?: string | number;
}

export function Icon({ icon: IconComponent, size, ...other }: IconProps) {
	const resolvedSize =
		typeof size === "string" ? (ICON_SIZES[size] ?? ICON_SIZES.sm) : (size ?? ICON_SIZES.sm);

	return (
		<Box
			component="span"
			display="inline-flex"
			{...other}
		>
			<IconComponent size={resolvedSize} />
		</Box>
	);
}
