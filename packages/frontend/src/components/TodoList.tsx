import { ItemContainer, ItemContent } from "./TodoList.styled";


const data = [
    {
      id: 1,
      name: 'Analyse document',
      date: new Date(2022, 1, 4),
    },
    {
      id: 2,
      name: 'Develop the story',
      date: new Date(2022, 1, 10),
    },
    {
      id: 3,
      name: 'QA the story',
      date: new Date(2022, 1, 12),
    },
  ];

export const TodoList = () => {
  return (
    <div>
      {data.map((item) => (
        <ItemContainer>
          <ItemContent>
            <div className="date">
              {item.date.toLocaleDateString('fr-BE', {
                  weekday: "short",
                  year: "numeric",
                  month: "short",
                  day: "2-digit"
                  
                })}
            </div>
            <span>{item.name}</span>
          </ItemContent>
        </ItemContainer>
      ))}
    </div>
  );
}