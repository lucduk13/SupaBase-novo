import { onMount, Show } from "solid-js";
import { supabase } from "../services/supabase";

export default function SingOut() {
    onMount(async () => {
        const result = supabase.auth.signOut();
        if (result.error) {
            setResult("Odjava nije uspjela");
        }else{
            setResult("Prijava je uspjela")
        }
    });
return (
    <>
        <Show when={result()}>
            <div class="bg-slate-300 p-4 rounded">
            {result()}
            </div>
        </Show>
    </>
);
}