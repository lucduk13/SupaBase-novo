import { createResource, For } from "solid-js";
import { getCountries } from "../services/supabase";
import { useAuth } from "../components/AuthProvider";

export default function Home(props) {
    const session = useAuth();

    return (
        <div>
            <div>Korisnik: {session() ? "prijavljen" : "nije prijavljen"}</div>
        </div>
    );
}