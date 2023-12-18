import { Button, Input, Select } from "@features/ui";
import styles from "./issue-filter.module.scss";
import { FaCheck } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const IssueFilter = () => {
  const router = useRouter();
  const [value, setValue] = useState({
    status: "",
    level: "",
    project: "",
  });

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    getValues("project", e.target.value);
  };

  const getValues = (name: string, value: string) => {
    setValue((prev) => ({ ...prev, [name]: value.toLowerCase() }));
    router.push(
      {
        pathname: router.pathname,
        query: { ...router.query, [name]: value.toLowerCase() },
      },
      undefined,
      { shallow: true },
    );
    if (name === "project" && value === "") {
      delete router.query.project;
      router.push(
        {
          pathname: router.pathname,
          query: { ...router.query },
        },
        undefined,
        { shallow: true },
      );
    }
  };

  useEffect(() => {}, [router]);
  return (
    <form className={styles.container}>
      <Button
        color="primary"
        size="lg"
        iconPosition="leading"
        icon={<FaCheck size={14} fill={"#ffffff"} />}
      >
        Resolve selected issues
      </Button>
      <Select
        placeholder="Status"
        options={["Unresolved", "Resolved"]}
        value={value.status}
        getValues={getValues}
      />
      <Select
        placeholder="Level"
        options={["Error", "Warning", "Info"]}
        value={value.level}
        getValues={getValues}
      />
      <Input
        placeholder="Project Name"
        icon={<CiSearch size={20} />}
        value={value.project}
        getValues={getValues}
        onChange={handleSearchInput}
      />
    </form>
  );
};
