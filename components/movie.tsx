import Link from "next/link";
import styles from "../styles/movie.module.css";
import { useRouter } from "next/router";

interface IMovieProps {
    title:string;
    id:string;
    poster_path:string;
}

export default function Movie({title, id, poster_path}: IMovieProps) {
    return (
        <div className={styles.movie}>
            <Link href={`/movies/${id}`}><img src={poster_path} alt={title}/></Link>
            <Link href={`/movies/${id}`}>{title}</Link>
        </div>
    );
}