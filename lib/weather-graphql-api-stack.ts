import * as cdk from "aws-cdk-lib";
import { Construct } from "constructs";
import {
  AmplifyGraphqlApi,
  AmplifyGraphqlDefinition,
} from "@aws-amplify/graphql-api-construct";
import * as path from "path";

export class WeatherGraphqlApiStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    const amplifyApi = new AmplifyGraphqlApi(this, "WeatherGraphqlApi", {
      definition: AmplifyGraphqlDefinition.fromFiles(
        path.join(__dirname, "schema.graphql")
      ),
      authorizationModes: {
        defaultAuthorizationMode: "API_KEY",
        apiKeyConfig: {
          expires: cdk.Duration.days(30),
        },
      },
    });
  }
}
