import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import enTranslation from "../locales/en/translation.json";
import zhTranslation from "../locales/zh/translation.json";
import arTranslation from "../locales/ar/translation.json";

// 在 i18n 配置初始化之后，添加日志
i18n.use(initReactI18next).init(
  {
    resources: {
      en: {
        translation: enTranslation,
      },
      zh: {
        translation: zhTranslation,
      },
      ar: {
        translation: arTranslation,
      },
    },
    lng: "en", // 默认语言
    fallbackLng: "en", // 后备语言
    interpolation: {
      escapeValue: false, // React 处理转义
    },
    debug: true, // 开启调试模式，输出更多信息到控制台
  },
  (err, t) => {
    if (err) {
      console.error("i18next initialization failed:", err); // 如果初始化失败，打印错误
    } else {
      console.log("i18next initialized successfully!"); // 如果成功，打印成功信息
      console.log("Current language:", i18n.language); // 打印当前语言
    }
  }
);

console.log("i18next is initialized:", i18n.isInitialized); // 打印初始化状态

export default i18n;
