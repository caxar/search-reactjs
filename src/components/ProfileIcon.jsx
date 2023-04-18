import { TbGridDots } from "react-icons/tb";

const ProfileIcon = () => {
    return (
        <div className="flex gap-2">
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.06]">
                <TbGridDots size={24} color='#5f6368' />
            </span>
            <span className="h-10 w-10 flex items-center justify-center rounded-full cursor-pointer hover:bg-black/[0.06] ">
                <img className="rounded-full" src="https://lh3.googleusercontent.com/ogw/AOLn63HNE7N1ssTrZKqVZIC0WRUOAAQ_nD6Bgo-slhP2=s32-c-mo" alt="" />
            </span>
        </div>
    );
};

export default ProfileIcon;
