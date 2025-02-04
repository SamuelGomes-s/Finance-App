import AppRoutes from "./app.routes"
import AuthRoutes from "./auth.routes"

export default function Routes() {

    const signed = false;

    return signed ? <AppRoutes /> : <AuthRoutes />

}