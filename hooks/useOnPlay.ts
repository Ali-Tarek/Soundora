import { Song } from "@/types";
import usePlayer from "./usePlayer";
import useAuthModal from "./useAuthModal";
import { useUser } from "./useUser";

const useOnPlay = (song: Song[]) => {

    const player = usePlayer();
    const authModel = useAuthModal();
    const  {user} = useUser();

    const onPlay = (id: string) => {
        if (!user) {
            return authModel.onOpen();
        }


        player.setId(id);
        player.setIds(song.map((song) => song.id));
    }

    return onPlay;

}

export default useOnPlay;