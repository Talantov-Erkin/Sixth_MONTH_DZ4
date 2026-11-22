import { Badge, Button, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Input } from "./shared/ui"

function App() {

  // UI-kit -> Набор готовых компонентов интерфейса: кнопки, поля, карточки, модалки
  // Дизайн-токен -> Базовые значения: цвета, шрифты, отступы, радиусы и тени 
  // Дизайн-система -> Токены + Ui-kit + правила пользования + документация

  return (
    <div className="flex flex-col gap-8 p-8">
      <div className="flex flex-wrap gap-3">
        <Button size="lg">click me</Button>
        <Button variant="secondary" size="lg">click me</Button>
        <Button variant="danger" size="lg">click me</Button>
        <Button variant="ghost" size="lg">click me</Button>
      </div>

      <div className="flex flex-wrap gap-3">
        <Badge>primary</Badge>
        <Badge variant="success">success</Badge>
        <Badge variant="warning">warning</Badge>
        <Badge variant="danger">danger</Badge>
        <Badge variant="neutral">neutral</Badge>
      </div>

      <div className="flex max-w-sm flex-col gap-4">
        <Input label="Email" placeholder="you@example.com" hint="Мы не рассылаем спам" />
        <Input label="Пароль" type="password" error="Минимум 8 символов" />
        <Input label="Отключено" disabled placeholder="Недоступно" />
      </div>

      <div className="flex flex-wrap gap-6">
        <Card className="w-80">
          <CardHeader>
            <Badge variant="success">В наличии</Badge>
            <CardTitle>Наушники</CardTitle>
            <CardDescription>Bluetooth 5.3, 30 часов работы</CardDescription>
          </CardHeader>
          <CardContent>Лёгкие беспроводные наушники для города и спорта.</CardContent>
          <CardFooter>
            <Button size="sm">Купить</Button>
            <Button size="sm" variant="ghost">Подробнее</Button>
          </CardFooter>
        </Card>

        <Card variant="elevated" interactive className="w-80">
          <CardHeader>
            <CardTitle>Elevated + interactive</CardTitle>
            <CardDescription>Тень и hover-эффект</CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  )
}

export default App
