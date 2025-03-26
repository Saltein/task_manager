import { APIs } from "../../../../shared/api";

export const loginApi = async (formData) => {
    try {
        const response = await APIs.user.login(formData);
        console.log("Успешный вход:", response);
    } catch (error) {
        console.error("Ошибка входа:", error);
    }
};
