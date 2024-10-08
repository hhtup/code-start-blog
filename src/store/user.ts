import { defineStore } from "pinia";
import { reactive } from "vue";

interface UserInterface {
  id?: number | null;
  username: string;
  password: string;
  avatar?: string | null;
  role: string;
  email: string;
  intro?: string | null;
  motto?: string | null;
}

export const useUserStore = defineStore("user", () => {
  const user = reactive<UserInterface>(
    JSON.parse(localStorage.getItem("user") || 
    JSON.stringify({
      id: null,
      username: "",
      password: "",
      avatar: null,
      role: "",
      email: "",
      intro: null,
      motto: null,
    }))
  );

  const setUser = (newUser: UserInterface) => {
    localStorage.setItem("user", JSON.stringify(newUser));
    Object.assign(user, newUser);
  };

  return { user, setUser };
});
