import { ActivityIndicator } from "react-native";
import { Container, Content } from "./styles";

export default function SubmitBtn({ loading, text, ...props }) {

    return (
        <Container loading={loading} {...props}>
            {
                loading ? (
                    <ActivityIndicator size={'small'} color={"#FFFFFF"} />
                ) : (
                    <Content>
                        {text}
                    </Content>
                )
            }
        </Container>
    )

}