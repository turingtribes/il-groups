import Branch from "./branch/branch";
export default function BranchContainer () {
    const email = "igroups2025@gmail.com"
    return (
        <div className="grid grid-cols-3 h-380 place-items-center text-gray-100 gap-3">
            <Branch 
             banner={true}
             icon={""}
             branch={"I Groups"}
             location={"Pudukkottai"}
             address={"No.2741, Thirukkattalai,Ashok Nagar Bus stop, Sornaboomi Nagar, Pudukkottai - 622303"}
             phoneNo={"+91 99523 63079"}
             email={email}
             teamMembersCount={80}>
            </Branch>

            <Branch
             banner={false}
             icon={""}
             branch={"Impetus"}
             location={"Pudukkottai"}
             address={"TVS Shanmuga Nagar, Pudukkottai - 622303"}
             phoneNo={"+91 99523 63079"}
             email={email}
             teamMembersCount={80}>
            </Branch>

            <Branch
             banner={false}
             icon={""}
             branch={"Infinity"}
             location={"Pudukkottai"}
             address={"Ashok Nagar, Pudukkottai - 622001"}
             phoneNo={"+91 99523 63079"}
             email={email}
             teamMembersCount={45}>
            </Branch>

            <Branch 
             banner={false}
             icon={""}
             branch={"Intelygenz"}
             location={"Pudukkottai"}
             address={"Ashok Nagar, Pudukkottai - 622001"}
             phoneNo={"+91 99523 63079"} 
             email={email} 
             teamMembersCount={30}>
            </Branch>

            <Branch
             banner={false}
             icon={""}
             branch={"Inspire"}
             location={"Pudukkottai"}
             address={"Melur, Tamil nadu - 622001"}
             phoneNo={"+91 99523 63079"}
             email={email}
             teamMembersCount={25}>
            </Branch>

            <Branch
             banner={false}
             icon={""}
             branch={"Insight"}
             location={"Pudukkottai"}
             address={"Machuvadi, Pudukkottai - 622001"}
             phoneNo={"+91 99523 63079"}
             email={email}
             teamMembersCount={20}>        
            </Branch>

            <Branch 
             banner={false} 
             icon={""} 
             branch={"Innowave"} 
             location={"Pattukottai"} 
             address={"Pattukottai Main - 622001"} 
             phoneNo={"+91 99523 63079"} 
             email={email} 
             teamMembersCount={18}>
            </Branch>

            <Branch 
             banner={false} 
             icon={""} 
             branch={"Infogain"} 
             location={"Karaikudi"} 
             address={"Karaikudi 630001"} 
             phoneNo={"+91 99523 63079"} 
             email={email} 
             teamMembersCount={18}>
            </Branch>        
        </div>
    );
}