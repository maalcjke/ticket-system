create table if not exists tickets
(
	id uuid default gen_random_uuid() not null
		primary key,
	status integer not null,
	title text not null,
	body text not null,
	reason text not null,
	created_at timestamp with time zone default CURRENT_TIMESTAMP not null,
	updated_at timestamp with time zone default CURRENT_TIMESTAMP not null
);

create index if not exists idx_appeals_status
	on tickets (status);

create index if not exists idx_appeals_created_at
	on tickets (created_at);

create trigger update_appeals_updated_at
	before update
	on tickets
	for each row
	execute procedure update_updated_at_column();