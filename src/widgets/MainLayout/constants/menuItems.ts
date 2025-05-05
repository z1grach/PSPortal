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
    {title: 'Главная', path: PATH.PLATFORMS, icon: HomeIcon},
    {title: 'Мои команды', path: PATH.TEAMS, icon: TeamIcon},
    {title: 'Подключение', path: PATH.CONNECTION, icon: ConnectionIcon},
    {title: 'Модерация', path: '/moderation', icon: ModerationIcon},
    {title: 'Кошелёк', path: PATH.PLATFORMS + '/1?type=detail', icon: WalletIcon},
    {title: 'Отзывы', path: PATH.PLATFORMS + '/1?type=feedbacks', icon: ReviewsIcon},
    {title: 'Вопросы', path: PATH.PLATFORMS + '/1?type=questions', icon: QuestionsIcon},
    {title: 'Настройки', path: '/settings', icon: SettingsIcon, divider: true},
    {title: 'Контакты', path: '/contacts', icon: ContactsIcon},
    {title: 'Telegram канал', path: PATH.ABOUT, icon: InfoIcon},
];