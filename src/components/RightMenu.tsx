import Add from "./Add";
import Birthdays from "./Birthdays";
import { FreandRequest } from "./FreandRequest";

const RightMenu = ({ userId }: { userId: string }) => {
  return (
    <div className="flex flex-col gap-6">
      <FreandRequest />
      <Birthdays />
      <Add size="md" />
    </div>
  );
};

export default RightMenu;
