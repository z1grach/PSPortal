import {
    ConnectionIcon,
    ContactsIcon,
    HomeIcon,
    InfoIcon,
    ModerationIcon,
    QuestionsIcon,
    ReviewsIcon,
    SettingsIcon,
    TeamIcon,
    WalletIcon
} from "../../../shared/assets/icons";
import {PATH} from "../../../shared/constants/routePaths.ts";

export const menuItems = [
    {title: 'Главная', path: PATH.HOME, icon: HomeIcon},
    {title: 'Мои команды', path: PATH.TEAMS, icon: TeamIcon},
    {title: 'Подключение', path: PATH.CONNECTION, icon: ConnectionIcon},
    {title: 'Модерация', path: '/moderation', icon: ModerationIcon},
    {title: 'Кошелёк', path: '/wallet', icon: WalletIcon},
    {title: 'Отзывы', path: '/reviews', icon: ReviewsIcon},
    {title: 'Вопросы', path: '/questions', icon: QuestionsIcon},
    {title: 'Настройки', path: '/settings', icon: SettingsIcon, divider: true},
    {title: 'Контакты', path: '/contacts', icon: ContactsIcon},
    {title: 'Telegram канал', path: '/telegram', icon: InfoIcon},
];