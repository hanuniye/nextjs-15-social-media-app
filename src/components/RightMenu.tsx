import Add from "./Add";
import Birthdays from "./Birthdays";
import { FreandRequest } from "./FreandRequest";
import UserInfoCard from "./UserInfoCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId ? (
        <>
          <UserInfoCard userId="ll" />
          <UserMediaCard userId="ll" />
        </>
      ) : null}
      <FreandRequest />
      <Birthdays />
      <Add size="md" />
    </div>
  );
};

export default RightMenu;
