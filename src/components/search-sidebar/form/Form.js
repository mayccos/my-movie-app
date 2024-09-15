"use client";
import DatePicker from "react-datepicker";
import styles from "./Form.module.scss";
import { useRouter, usePathname, useParams } from "next/navigation";
import { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";

const Form = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const searchParams = new URLSearchParams();
    searchParams.append("sort_by", form.get("sort"));
    searchParams.append("release_date.gte", form.get("fromDate"));
    searchParams.append("release_date.lte", form.get("toDate"));

    router.push(`${pathname}?${searchParams.toString()}`);
  };
  const [date, setDate] = useState(new Date());
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      {params.locale == "en" ? <h2>Filter</h2> : <h2>Filtrer</h2>}
      <div className={styles.date}>
        {params.locale == "en" ? (
          <h3>Release date</h3>
        ) : (
          <h3>Date de sortie</h3>
        )}
        <div>
          <p>{params.locale == "en" ? "From" : "Du"}</p>
          <DatePicker
            selectsStart
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            startDate={startDate}
            dateFormat={
              params.locale == "en" ? "MM / dd / yyyy" : "dd / MM / yyyy"
            }
            name="fromDate"
            placeholderText={
              params.locale == "en" ? "mm / dd / yyyy" : "dd / mm / yyyy"
            }
          />
        </div>
        <div>
          <p>{params.locale == "en" ? "To" : "Au"}</p>
          <DatePicker
            selectsEnd
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            endDate={endDate}
            dateFormat={
              params.locale == "en" ? "MM / dd / yyyy" : "dd / MM / yyyy"
            }
            name="toDate"
            placeholderText={
              params.locale == "en" ? "mm / dd / yyyy" : "dd / mm / yyyy"
            }
          />
        </div>
      </div>
      <div>
        <h3>{params.locale == "en" ? "Sort by" : "Trier par"}</h3>
        <select name="sort">
          <option value="popularity.desc">
            {params.locale == "en" ? "Popularity" : "Popularité"}
          </option>
          <option value="vote_average.desc">
            {params.locale == "en" ? "Note" : "Note"}
          </option>
          <option value="cote_count.desc">
            {params.locale == "en" ? "Number of note" : "Nombre de notes"}
          </option>
        </select>
      </div>
      <input
        type="submit"
        value={params.locale == "en" ? "Search" : "Rechercher"}
      />
    </form>
  );
};

export default Form;
