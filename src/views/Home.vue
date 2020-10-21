<template>
  <tree-app :tree="tree" :leader-list="leaderList"/>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      tree: {
        id: 1,
        name: 'Сарычев Михаил',
        position: 'Владелец',
        second_position: 'Руководитель',
        description: 'TEST',
        color: '#E8C567',
        type: 1,
        children: [
          {
            id: 2,
            name: 'Петров Василий',
            position: 'Генеральный Директор',
            second_position: 'Руководитель',
            color: '#E8C567',
            type: 2,
            children: [
              {
                id: 3,
                name: 'Иванова Екатерина',
                position: 'Административный директор',
                second_position: 'Руководитель',
                color: '#E8C567',
                type: 2,
                children: [],
              },
              {
                id: 4,
                name: 'Рыжиков Генадий',
                position: 'Технический директор',
                second_position: 'Руководитель',
                color: '#E8C567',
                type: 2,
                children: [
                  {
                    id: 12,
                    name: 'Горин Генадий',
                    position: 'Кто-то',
                    second_position: 'Руководитель',
                    description: 'Сохраненные, учтенные и не утрачивающие своей ценности денежные и материальные активы',
                    color: '#E8C567',
                    number: 1,
                    type: 3,
                    children: [],
                  },
                ],
              },
              {
                id: 5,
                name: 'Катеринин Александр',
                position: 'Директор по развитию',
                second_position: 'Руководитель',
                color: '#E8C567',
                type: 2,
                children: [
                  {
                    id: 6,
                    name: 'Порядин Сергей',
                    position: 'Руководитель',
                    second_position: 'Руководитель',
                    color: '#E8C567',
                    number: 1,
                    description: `Сохраненные, учтенные и не утрачивающие своей
                      ценности денежные и материальные активы`,
                    type: 3,
                    children: [
                      {
                        id: 21,
                        name: 'Порядин Сергей (5)',
                        position: 'Руководитель',
                        second_position: 'Руководитель',
                        color: '#E8C567',
                        number: 1,
                        description: `Сохраненные, учтенные и не утрачивающие своей
                      ценности денежные и материальные активы`,
                        type: 4,
                        children: [],
                      },
                      {
                        id: 22,
                        name: 'asdadsasdasddas',
                        position: 'Руководитель',
                        second_position: 'Руководитель',
                        color: '#E8C567',
                        number: 2,
                        description: `Профессионально оказанные
                      услуги косметической ортодонтии`,
                        type: 4,
                        children: [
                          {
                            id: 51,
                            name: 'Имя Фамилия (1)',
                            position: 'Руководитель',
                            second_position: 'Руководитель',
                            color: '#E8C567',
                            number: 2,
                            description: `Профессионально оказанные
                      услуги косметической ортодонтии`,
                            type: 5,
                            staff: [
                              {
                                id: 1,
                                src: 'https://i.ibb.co/6Fjxq6D/user1.jpg',
                                name: 'Мельникова Анастасия Евгеньевна',
                                phone: '+7 (902) 789-09-08',
                                additional: [
                                  { label: 'Telegram', value: '+7 (902) 789-09-08' },
                                  { label: 'Дата рождения', value: '01.02.1998' },
                                ],
                              },
                              {
                                id: 2,
                                src: 'https://i.ibb.co/fvkYwsK/user2.jpg',
                                name: 'Поливко Ольга Евгеньевна',
                                phone: '+7 (902) 789-09-08',
                                additional: [
                                  { label: 'Telegram', value: '+7 (902) 789-09-08' },
                                  { label: 'Дата рождения', value: '01.02.1998' },
                                ],
                              },
                              {
                                id: 3,
                                src: 'https://i.ibb.co/zmWdLWh/user3.jpg',
                                name: 'Сидорова Анна Дмитриевна',
                                phone: '+7 (902) 789-09-08',
                                additional: [
                                  { label: 'Telegram', value: '+7 (902) 789-09-08' },
                                  { label: 'Дата рождения', value: '01.02.1998' },
                                ],
                              },
                              {
                                id: 4,
                                src: 'https://i.ibb.co/88YjHBT/user4.png',
                                name: 'Петров Иван Николаевич',
                                phone: '+7 (902) 789-09-08',
                                additional: [
                                  { label: 'Telegram', value: '+7 (902) 789-09-08' },
                                  { label: 'Дата рождения', value: '01.02.1998' },
                                ],
                              },
                              {
                                id: 5,
                                src: 'https://i.ibb.co/PG2mNHW/user5.jpg',
                                name: 'Васильев Николай Ильич',
                                phone: '+7 (902) 789-09-08',
                                additional: [
                                  { label: 'Telegram', value: '+7 (902) 789-09-08' },
                                  { label: 'Дата рождения', value: '01.02.1998' },
                                ],
                              },
                              {
                                id: 6,
                                src: 'https://i.ibb.co/jH6F374/user6.jpg',
                                name: 'Петров Дмитрий Николаевич',
                                phone: '+7 (902) 789-09-08',
                                additional: [
                                  { label: 'Telegram', value: '+7 (902) 789-09-08' },
                                  { label: 'Дата рождения', value: '01.02.1998' },
                                ],
                              },
                            ],
                            children: [],
                          },
                          {
                            id: 52,
                            name: 'Имя Фамилия (2)',
                            position: 'Руководитель',
                            second_position: 'Руководитель',
                            color: '#E8C567',
                            number: 3,
                            description: `Профессионально оказанные
                      услуги косметической ортодонтии`,
                            type: 5,
                            children: [
                              {
                                id: 62,
                                name: 'Имя Фамилия (3)',
                                position: 'Руководитель',
                                second_position: 'Руководитель',
                                color: '#E8C567',
                                number: 3,
                                description: `Профессионально оказанные
                      услуги косметической ортодонтии`,
                                type: 5,
                                children: [],
                              },
                            ],
                          },
                        ],
                      },
                      {
                        id: 23,
                        name: 'Порядин Сергей(3)',
                        position: 'Руководитель',
                        second_position: 'Руководитель',
                        color: '#E8C567',
                        number: 3,
                        description: 'Доход компании, больше чем расходы',
                        type: 4,
                        children: [
                          {
                            id: 71,
                            name: 'Имя Фамилия (4)',
                            position: 'Руководитель',
                            second_position: 'Руководитель',
                            color: '#E8C567',
                            number: 2,
                            description: `Профессионально оказанные
                      услуги косметической ортодонтии`,
                            type: 5,
                            children: [],
                          },
                          {
                            id: 72,
                            name: 'Имя Фамилия (5)',
                            position: 'Руководитель',
                            second_position: 'Руководитель',
                            color: '#E8C567',
                            number: 3,
                            description: `Профессионально оказанные
                      услуги косметической ортодонтии`,
                            type: 5,
                            children: [],
                          },
                        ],
                      },
                    ],
                  },
                  {
                    id: 7,
                    name: 'Порядин Сергей(2)',
                    position: 'Руководитель',
                    color: '#E8C567',
                    number: 2,
                    description: `Профессионально оказанные
                      услуги косметической ортодонтии`,
                    type: 3,
                    children: [],
                  },
                  {
                    id: 8,
                    name: 'Порядин Сергей(32)',
                    position: 'Руководитель',
                    color: '#E8C567',
                    number: 3,
                    description: 'Доход компании, больше чем расходы',
                    type: 3,
                    children: [],
                  },
                  {
                    id: 9,
                    name: 'Порядин Сергей(4)',
                    position: 'Руководитель',
                    color: '#E8C567',
                    number: 4,
                    description: `Введенные в должность,
                      хорошо производящие свои продукты сотрудники`,
                    type: 3,
                    children: [],
                  },
                ],
              },
            ],
          },
        ],
      },
      leaderList: [
        { label: 'Петя Пупкин' },
        { label: 'Вася Серябкин' },
      ],
    };
  },
};
</script>
