import Header from "./components/Header/Header";
import SecondaryHeader from "./components/SecondaryHeader/SecondaryHeader";
import BranchContainer from "./components/BranchContainer/BranchContainer";

export default function Branches() {
    
return (
    <div className="flex flex-col items-center bg-black ">

    <Header></Header>

    <SecondaryHeader></SecondaryHeader>

    <BranchContainer></BranchContainer>

    </div>
)

}