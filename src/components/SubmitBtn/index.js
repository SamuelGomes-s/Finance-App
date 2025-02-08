import { ActivityIndicator } from "react-native";
import { Container, Content } from "./styles";

export default function SubmitBtn({ $loading, $text, $bg, ...props }) {

    return (
        <Container $loading={$loading} {...props} $bg={$bg}>
            {
                $loading ? (
                    <ActivityIndicator size={'small'} color={"#FFFFFF"} />
                ) : (
                    <Content>
                        {$text}
                    </Content>
                )
            }
        </Container>
    )

}