import Card from "@/components/Card/Card.component";
import HandleErrorUserFetch from "@/infrastructure/api/User/users.api.error";

import { UserDetails } from "@/domain/entities/user.entity";

const ListUsers = ({
	users,
	errors,
}: {
	users: { items: { names: string; age: number }[] };
	errors: { title: string; buttonLabel: string };
}) => {
	return users?.items?.length > 0 ? (
		users?.items.map((item: UserDetails, i: number) => (
			<Card key={`user_${i}`} name={item.names} age={item.age} />
		))
	) : (
		<HandleErrorUserFetch
			title={errors.title}
			buttonLabel={errors?.buttonLabel}
		/>
	);
};

export default ListUsers;
