import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [likes, setLikes] = useState<{ [key: string]: boolean }>({});
  const [activeTab, setActiveTab] = useState('discover');

  const toggleLike = (profileId: string) => {
    setLikes(prev => ({
      ...prev,
      [profileId]: !prev[profileId]
    }));
  };

  const profiles = [
    {
      id: '1',
      name: 'Алекс',
      age: 25,
      bio: 'Люблю кофе, книги и долгие прогулки по городу ☕📚',
      location: 'Москва',
      interests: ['Искусство', 'Музыка', 'Путешествия'],
      verified: true,
      online: true
    },
    {
      id: '2', 
      name: 'Сэм',
      age: 28,
      bio: 'Фотограф и любитель природы 📸🌿',
      location: 'Санкт-Петербург',
      interests: ['Фотография', 'Природа', 'Йога'],
      verified: true,
      online: false
    },
    {
      id: '3',
      name: 'Рэй',
      age: 24,
      bio: 'Танцую, готовлю, мечтаю 💃🍳✨',
      location: 'Екатеринбург', 
      interests: ['Танцы', 'Кулинария', 'Театр'],
      verified: false,
      online: true
    }
  ];

  const events = [
    {
      id: '1',
      title: 'ЛГБТ+ кинопоказ',
      date: '15 августа',
      time: '19:00',
      location: 'Центральный кинотеатр',
      attendees: 42,
      type: 'культура'
    },
    {
      id: '2',
      title: 'Прайд-пикник в парке',
      date: '20 августа',
      time: '14:00', 
      location: 'Парк Горького',
      attendees: 128,
      type: 'активность'
    },
    {
      id: '3',
      title: 'Творческая встреча',
      date: '25 августа',
      time: '18:30',
      location: 'Арт-пространство "Флакон"',
      attendees: 35,
      type: 'творчество'
    }
  ];

  const matches = [
    { id: '1', name: 'Алекс', avatar: '🌟', mutualLikes: true },
    { id: '2', name: 'Джордан', avatar: '🎨', mutualLikes: true },
    { id: '3', name: 'Кейси', avatar: '🌈', mutualLikes: false }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-primary to-secondary rounded-lg flex items-center justify-center">
                <Icon name="Heart" size={20} className="text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Connect & Love
              </h1>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Icon name="MessageCircle" size={20} />
              </Button>
              <Button variant="ghost" size="sm">
                <Icon name="Bell" size={20} />
              </Button>
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-primary text-white">Я</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <div className="container mx-auto px-4 py-6">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-4 bg-white/70 backdrop-blur">
            <TabsTrigger value="discover" className="flex items-center space-x-2">
              <Icon name="Users" size={16} />
              <span>Поиск</span>
            </TabsTrigger>
            <TabsTrigger value="matches" className="flex items-center space-x-2">
              <Icon name="Heart" size={16} />
              <span>Матчи</span>
            </TabsTrigger>
            <TabsTrigger value="events" className="flex items-center space-x-2">
              <Icon name="Calendar" size={16} />
              <span>События</span>
            </TabsTrigger>
            <TabsTrigger value="profile" className="flex items-center space-x-2">
              <Icon name="User" size={16} />
              <span>Профиль</span>
            </TabsTrigger>
          </TabsList>

          {/* Discover Tab */}
          <TabsContent value="discover" className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {profiles.map((profile) => (
                <Card key={profile.id} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur border-0 shadow-sm animate-fade-in">
                  <CardHeader className="relative pb-2">
                    <div className="relative">
                      <div className="w-full h-48 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg mb-4 flex items-center justify-center text-6xl">
                        {profile.name.charAt(0)}
                      </div>
                      {profile.verified && (
                        <Badge className="absolute top-2 right-2 bg-primary">
                          <Icon name="CheckCircle" size={12} className="mr-1" />
                          Верифицирован
                        </Badge>
                      )}
                      {profile.online && (
                        <div className="absolute bottom-2 right-2 w-4 h-4 bg-green-500 rounded-full border-2 border-white"></div>
                      )}
                    </div>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{profile.name}, {profile.age}</CardTitle>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleLike(profile.id)}
                        className={`${likes[profile.id] ? 'text-primary animate-heart-pulse' : 'text-muted-foreground'} hover:text-primary transition-colors`}
                      >
                        <Icon name="Heart" size={20} fill={likes[profile.id] ? 'currentColor' : 'none'} />
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-muted-foreground mb-3">{profile.bio}</p>
                    <div className="flex items-center space-x-1 text-xs text-muted-foreground mb-3">
                      <Icon name="MapPin" size={12} />
                      <span>{profile.location}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {profile.interests.map((interest, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">
                          {interest}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1">
                        <Icon name="MessageCircle" size={14} className="mr-1" />
                        Написать
                      </Button>
                      <Button variant="outline" size="sm">
                        <Icon name="User" size={14} />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Matches Tab */}
          <TabsContent value="matches" className="mt-6">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/80 backdrop-blur border-0 shadow-sm">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Heart" size={20} className="text-primary" />
                    <span>Ваши совпадения</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {matches.map((match) => (
                      <div key={match.id} className="flex items-center justify-between p-4 rounded-lg bg-gradient-to-r from-primary/5 to-secondary/5 hover:from-primary/10 hover:to-secondary/10 transition-all duration-300">
                        <div className="flex items-center space-x-3">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-xl">
                            {match.avatar}
                          </div>
                          <div>
                            <h3 className="font-medium">{match.name}</h3>
                            <p className="text-sm text-muted-foreground">
                              {match.mutualLikes ? 'Взаимная симпатия' : 'Ждет ответа'}
                            </p>
                          </div>
                        </div>
                        <div className="flex space-x-2">
                          <Button size="sm" variant={match.mutualLikes ? 'default' : 'outline'}>
                            <Icon name="MessageCircle" size={14} />
                          </Button>
                          {match.mutualLikes && (
                            <div className="flex items-center text-primary">
                              <Icon name="Heart" size={16} fill="currentColor" />
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Events Tab */}
          <TabsContent value="events" className="mt-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-6 text-center">
                <h2 className="text-2xl font-bold mb-2">ЛГБТ+ События</h2>
                <p className="text-muted-foreground">Встречайся с единомышленниками в реальной жизни</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {events.map((event) => (
                  <Card key={event.id} className="group hover:shadow-lg transition-all duration-300 bg-white/80 backdrop-blur border-0 shadow-sm">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <Badge variant="secondary" className="mb-2">
                          {event.type}
                        </Badge>
                        <Button variant="ghost" size="sm">
                          <Icon name="Bookmark" size={16} />
                        </Button>
                      </div>
                      <CardTitle className="text-lg">{event.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Calendar" size={16} />
                          <span>{event.date} в {event.time}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="MapPin" size={16} />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                          <Icon name="Users" size={16} />
                          <span>{event.attendees} участников</span>
                        </div>
                        <Button className="w-full mt-4">
                          <Icon name="Plus" size={16} className="mr-2" />
                          Участвовать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Profile Tab */}
          <TabsContent value="profile" className="mt-6">
            <div className="max-w-2xl mx-auto">
              <Card className="bg-white/80 backdrop-blur border-0 shadow-sm">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center text-white text-2xl">
                      Я
                    </div>
                    <div className="flex-1">
                      <h2 className="text-2xl font-bold">Мой профиль</h2>
                      <p className="text-muted-foreground">Настройте свой профиль для лучших совпадений</p>
                    </div>
                    <Badge className="bg-primary">
                      <Icon name="CheckCircle" size={12} className="mr-1" />
                      Верифицирован
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="font-medium mb-3">Заполненность профиля</h3>
                    <Progress value={85} className="mb-2" />
                    <p className="text-sm text-muted-foreground">85% завершено</p>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Показывать онлайн статус</h4>
                        <p className="text-sm text-muted-foreground">Другие увидят, когда вы в сети</p>
                      </div>
                      <Switch defaultChecked />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Приватный режим</h4>
                        <p className="text-sm text-muted-foreground">Скрыть профиль от поиска</p>
                      </div>
                      <Switch />
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-medium">Уведомления о событиях</h4>
                        <p className="text-sm text-muted-foreground">Получать уведомления о новых ЛГБТ+ событиях</p>
                      </div>
                      <Switch defaultChecked />
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="flex-1">
                      <Icon name="Edit" size={16} className="mr-2" />
                      Редактировать
                    </Button>
                    <Button variant="outline">
                      <Icon name="Settings" size={16} />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;