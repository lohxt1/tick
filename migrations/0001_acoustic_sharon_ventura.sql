ALTER TABLE `user` RENAME COLUMN `name` TO `first_name`;--> statement-breakpoint
ALTER TABLE ticket ADD `created_at` text;--> statement-breakpoint
ALTER TABLE user ADD `last_name` text;--> statement-breakpoint
ALTER TABLE user ADD `email` text;