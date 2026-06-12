import { Suspense } from "react";
import { NuevoEquipoContainer } from "../../nuevoEquipo/containers/NuevoEquipoContainer";

export default function NewTeamPage() {
    // useSearchParams (en el container) exige un límite de Suspense en export estático
    return (
        <Suspense fallback={null}>
            <NuevoEquipoContainer />
        </Suspense>
    );
}
