import Image from "next/image";
import { MapPin, Phone, Mail, CircleUserRound } from "lucide-react";
type Props = {
    banner: boolean,
    icon: string,
    branch: string,
    location: string,
    address: string,
    phoneNo: string,
    email: string,
    teamMembersCount: number
}
export default function Branch(props: Props) {
    return (
        <div className="flex flex-col justify-center items-center bg-[#141A33] w-100 h-120 m-2 rounded-xl text-center gap-6">
            <div>
                {props.banner}
            </div>

            <div>
               <Image src={"/office_building.png"} alt={"office building icon"} width={100} height={100}></Image>
            </div>

            <div className="header">
                <div className="text-blue-500 text-3xl">{props.branch}</div>
                <div className="text-lg">{props.location}</div>
            </div>

            <div className="body flex flex-col gap-3">
                <div className="flex flex-row w-100 items-center justify-center gap-2">
                    <MapPin color="red" height={20} width={20} className="shrink-0 "></MapPin> <div> {props.address} </div>
                </div>
                <div className="flex flex-row w-100 items-center justify-center gap-2">
                    <Phone height={20} width={20}> </Phone> <div>{props.phoneNo}</div>
                </div>
                <div className="flex flex-row w-100 items-center justify-center gap-2">
                    <Mail height={20} width={20}> </Mail> <div>{props.email}</div>
                </div>
            </div>

            <div className="bg-blue-500 w-90 h-0.5">

            </div>

            <div className="footer">
                {`${props.teamMembersCount}+ Team Members`}
            </div>

        </div>
    );
}