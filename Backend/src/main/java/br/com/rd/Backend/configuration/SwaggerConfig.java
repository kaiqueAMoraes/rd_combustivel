package br.com.rd.Backend.configuration;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.RequestMethod;
import springfox.documentation.builders.ApiInfoBuilder;
import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.builders.ResponseMessageBuilder;
import springfox.documentation.schema.ModelRef;
import springfox.documentation.service.ApiInfo;
import springfox.documentation.service.Contact;
import springfox.documentation.service.ResponseMessage;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

import java.util.ArrayList;
import java.util.List;

@Configuration
@EnableSwagger2
public class SwaggerConfig {

    static final String BASE_PACKAGE = "br.com.rd.Backend.controllers";
    static final String URLS = "/**";


    @Bean
    public Docket api() {
        return new Docket(DocumentationType.SWAGGER_2)
                .select()
                .apis(RequestHandlerSelectors.basePackage(BASE_PACKAGE))
                .paths(PathSelectors.ant(URLS))
                .build()
                .useDefaultResponseMessages(false)
                .globalResponseMessage(RequestMethod.GET, responseMessageForGET())
                .globalResponseMessage(RequestMethod.POST, responseMessageForPOST())
                .globalResponseMessage(RequestMethod.DELETE, responseMessageForDELETE())
                .globalResponseMessage(RequestMethod.PUT, responseMessageForPUT())
                .apiInfo(apiInfo());
    }

    private List<ResponseMessage> responseMessageForGET()
    {
        return new ArrayList<ResponseMessage>() {{
            add(new ResponseMessageBuilder()
                    .code(400)
                    .message("400 Bad Request")
                    .build());
        }};
    }

    private List<ResponseMessage> responseMessageForPOST()
    {
        return new ArrayList<ResponseMessage>() {{
            add(new ResponseMessageBuilder()
                    .code(400)
                    .message("400 Bad Request")
                    .build());
        }};
    }

    private List<ResponseMessage> responseMessageForDELETE()
    {
        return new ArrayList<ResponseMessage>() {{
            add(new ResponseMessageBuilder()
                    .code(400)
                    .message("400 Bad Request")
                    .build());
        }};
    }

    private List<ResponseMessage> responseMessageForPUT()
    {
        return new ArrayList<ResponseMessage>() {{
            add(new ResponseMessageBuilder()
                    .code(400)
                    .message("400 Bad Request")
                    .build());
        }};
    }

    private ApiInfo apiInfo() {
        return new ApiInfoBuilder()
                .title("API Origin Combustíveis")
                .description("Documentação da API")
                .version("1.0.0")
                .license("Apache License Version 2.0")
                .licenseUrl("https://www.apache.org/licenses/LICENSE-2.0")
                        .contact(new Contact("Origin Combustíveis", "https://github.com/kaiqueAMoraes/rd_combustivel", "origin.combustivel@gmail.com"))
                        .build();
    }
}
