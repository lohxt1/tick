CREATE TABLE `bus` (
	`id` text PRIMARY KEY NOT NULL,
	`seats` text
);
--> statement-breakpoint
CREATE TABLE `seat` (
	`id` text PRIMARY KEY NOT NULL,
	`bus_id` text,
	`seat_number` text,
	`seat_type` text
);
--> statement-breakpoint
CREATE TABLE `ticket` (
	`id` text PRIMARY KEY NOT NULL,
	`user_id` text,
	`seat_id` text
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` text PRIMARY KEY NOT NULL,
	`name` text,
	`created_at` text,
	`tickets` text
);
