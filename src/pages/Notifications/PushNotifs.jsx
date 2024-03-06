import NotificationHeader from "@/components/Notification/NotificationHeader";
import NotificationTable from "@/components/Notification/NotificationTable";
import { notificationArray } from "@/constants/data";
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";
import { useNavigate } from "react-router-dom";

const PushNotifs = () => {
    const [tabValue, setTabValue] = useState("all");

    const handleTabChange = (value) => {
        setTabValue(value);
    };

    const navigate = useNavigate();

    const filterNotifications = notificationArray.filter(checkStatus => {
        switch(tabValue) {
            case 'all':
                return true;
            case 'active':
                return checkStatus.status === 'Active';
            case 'inactive':
                return checkStatus.status === 'In Active';
            case 'deleted':
                return checkStatus.status === 'Deleted';
            case 'archived':
                return checkStatus.status === 'Archived';
            default:
                return false;
        }
    });
    return (
        <section className="section">
            <NotificationHeader navigate={navigate} handleTabChange={handleTabChange} />
            <NotificationTable filterNotifications={filterNotifications} />
            <div className="flex justify-between gap-[50%] items-center w-full text-[#ADADAD] mt-10">
                <h3 className="font-light text-sm">Showing 1 to <span className="font-semibold">{filterNotifications.length}</span> out of <span className="font-semibold">{notificationArray.length}</span> records</h3>
                <Pagination>
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious href="#" />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationLink href="#">1</PaginationLink>
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationEllipsis />
                        </PaginationItem>
                        <PaginationItem>
                            <PaginationNext href="#" />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            </div>            
        </section>
    )
}
export default PushNotifs