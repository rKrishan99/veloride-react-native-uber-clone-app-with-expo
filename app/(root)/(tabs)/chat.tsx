import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Chat = () => {
    return (
        <SafeAreaView className="bg-slate-600"> 
            <Text className='text-lg text-blue-800'>Chat</Text>
        </SafeAreaView>
    );
};

export default Chat;