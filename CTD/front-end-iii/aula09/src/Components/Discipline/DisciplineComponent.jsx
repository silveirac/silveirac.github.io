export default function DisciplineComponent ({name, students, avg}) {
      
    return (
        <tr>
            <td>{name}</td>
            <td>{students}</td>
            <td>{avg}</td>
        </tr>
    );
}