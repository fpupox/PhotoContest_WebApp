import { getProfiles } from "@/services/getProfiles";
import { usEffect, useEffect, useState } from "react";

import { Container } from "react-bootstrap"

export default function ProfilePage() {
    const { data, isLoading } = useQuery({
        queryKey: ["profiles"],
        queryFn: getProfiles,
        refetchWindowsFocus: true,
    });

    if (isLoading) {
        return <Container>Loading</Container>;

    }

    
    return (
        <Container>
        Profiles
        <ul>
            {data.map((profile) => (
                <li key={profile.id}>
                    <Link href={`/profiles/${profile.id}`}> {profile.Name} </Link>
                </li>            
            ))}



        </ul>
        </Container>
        );
        }