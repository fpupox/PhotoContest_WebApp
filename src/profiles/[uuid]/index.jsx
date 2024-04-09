import { Container } from "react-booststrap";
import { useRouter } from "next/router";
import { useQuery } from "@tanstack/react-query";
import { getProfileById } from "@/services/getProfilesById";

export default function ProfilePage() {
    const router = useRouter();
    const id = router.query.uuid;

const { data, isLoading } =useQuery({
    queryKey: ["profiles", id],
    queryFn: () => getProfileById (id),
});

if (isLoading) {
    return <Container>Loading</Container>
}

    return (
        <Container>
            <h2>Profile {data.Name}</h2>
            <img src={data.Picture} alt="profile picture" width={100} height={100} />
            <p>{data.backstory}</p>    
        
        
        </Container>
        );
}