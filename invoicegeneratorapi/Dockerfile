# Stage 1: Build the application using Maven
FROM maven:3.9.9-eclipse-temurin-21 AS build
WORKDIR /app

# Copy pom.xml and download dependencies first (better caching)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the entire project and build it
COPY . .
RUN mvn clean package -DskipTests

# Stage 2: Run the application using JDK
FROM openjdk:21-jdk-slim
WORKDIR /app

# Copy the jar file from build stage
COPY --from=build /app/target/invoicegeneratorapi-0.0.1-SNAPSHOT.jar app.jar

# Expose application port
EXPOSE 8080

# Start the Spring Boot application
CMD ["java", "-jar", "app.jar"]
