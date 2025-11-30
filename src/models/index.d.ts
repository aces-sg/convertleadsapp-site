import { ModelInit, MutableModel } from "@aws-amplify/datastore";

type SubmissionMetaData = {
  readOnlyFields: "createdAt" | "updatedAt";
};

export declare class Submission {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly phone?: string | null;
  readonly commpany?: string | null;
  readonly description?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Submission, SubmissionMetaData>);
  static copyOf(
    source: Submission,
    mutator: (
      draft: MutableModel<Submission, SubmissionMetaData>
    ) => MutableModel<Submission, SubmissionMetaData> | void
  ): Submission;
}
