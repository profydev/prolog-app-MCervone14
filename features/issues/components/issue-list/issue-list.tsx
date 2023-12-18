import { useRouter } from "next/router";
import { ProjectLanguage } from "@api/projects.types";
import { useGetProjects } from "@features/projects";
import { useGetIssues } from "../../api/use-get-issues";
import { IssueRow } from "./issue-row";
import styles from "./issue-list.module.scss";

export function IssueList() {
  const router = useRouter();
  const page = Number(router.query.page || 1);
  const navigateToPage = (newPage: number) =>
    router.push({
      pathname: router.pathname,
      query: { page: newPage },
    });

  const issuesPage = useGetIssues(page);
  const projects = useGetProjects();

  const { items, meta } = issuesPage.data || {};

  let filteredItems = items;

  if (router.query.project) {
    filteredItems = items?.filter((issue) =>
      issue.name.toLowerCase().includes(router.query.project as string),
    );
  }

  if (router.query.level) {
    filteredItems = items?.filter((issue) =>
      issue.level.toLowerCase().includes(router.query.level as string),
    );
  }

  if (router.query.status === "unresolved") {
    filteredItems = items?.filter((issue) =>
      issue.status.toLowerCase().includes("open"),
    );
  } else if (router.query.status === "resolved") {
    filteredItems = items?.filter((issue) =>
      issue.status.toLowerCase().includes(router.query.status as string),
    );
  }

  if (projects.isLoading || issuesPage.isLoading) {
    return <div>Loading</div>;
  }

  if (projects.isError) {
    console.error(projects.error);
    return <div>Error loading projects: {projects.error.message}</div>;
  }

  if (issuesPage.isError) {
    console.error(issuesPage.error);
    return <div>Error loading issues: {issuesPage.error.message}</div>;
  }

  const projectIdToLanguage = (projects.data || []).reduce(
    (prev, project) => ({
      ...prev,
      [project.id]: project.language,
    }),
    {} as Record<string, ProjectLanguage>,
  );

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead className={styles.thead}>
          <tr className={styles.headerRow}>
            <th className={styles.headerCell}>Issue</th>
            <th className={styles.headerCell}>Level</th>
            <th className={styles.headerCell}>Events</th>
            <th className={styles.headerCell}>Users</th>
          </tr>
        </thead>
        <tbody>
          {(filteredItems || []).map((issue) => (
            <IssueRow
              key={issue.id}
              issue={issue}
              projectLanguage={projectIdToLanguage[issue.projectId]}
            />
          ))}
        </tbody>
      </table>
      <div className={styles.paginationContainer}>
        <div>
          <button
            className={styles.paginationButton}
            onClick={() => navigateToPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>
          <button
            className={styles.paginationButton}
            onClick={() => navigateToPage(page + 1)}
            disabled={page === meta?.totalPages}
          >
            Next
          </button>
        </div>
        <div className={styles.pageInfo}>
          Page <span className={styles.pageNumber}>{meta?.currentPage}</span> of{" "}
          <span className={styles.pageNumber}>{meta?.totalPages}</span>
        </div>
      </div>
    </div>
  );
}
