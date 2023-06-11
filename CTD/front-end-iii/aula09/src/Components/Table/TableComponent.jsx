import DisciplineComponent from '../Discipline/DisciplineComponent';
import styles from './TableComponent.module.css';

export default function TableComponent ({disciplinas}) {
    
    return (
        <table>
            <thead>
                <tr>
                    <td>Disciplinas</td>
                    <td>Quantidade de Alunos</td>
                    <td>Média das Notas dos Alunos</td>
                </tr>
            </thead>
            <tbody>
                {
                    disciplinas.map((e, index) => <DisciplineComponent 
                        key={index}
                        name={e.name}
                        students={e.students.length}
                        avg={e.avg} 
                    />)
                }
            </tbody>
        </table>
    );
}