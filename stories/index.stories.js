import "../src/index.ts";

export default {};

export const EagerlyCursor = () => `
    <style>
        * {
            cursor: none;
        }

        .eagerly-crsr {
            --eagerly-crsr-clr: 220 100% 71%;
            --eagerly-crsr-clr-active: 330 100% 71%;
        }
    </style>

    <eagerly-cursor class="eagerly-crsr" linkElements="[data-crsr='true']"></eagerly-cursor>

    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem quas sunt accusantium dolorem beatae ut. In, iste. Quisquam, blanditiis ratione eum iste dignissimos odit, animi reprehenderit perspiciatis libero adipisci natus vel itaque earum suscipit, repudiandae quibusdam cumque ipsum quas. Temporibus magnam facere illum consequuntur assumenda suscipit ipsum necessitatibus quasi iste blanditiis laudantium molestiae totam maiores, consequatur animi in culpa, tenetur nam, laborum nulla impedit eaque. Sunt, amet et! Quisquam sed quae omnis, delectus placeat ipsam esse consectetur eius provident officia molestias repudiandae quam? Assumenda eius, iste asperiores illo inventore corporis quo beatae omnis, alias atque labore id, dignissimos optio.
        <a href="" data-crsr='true'>hallo</a>
    </p>

    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem quas sunt accusantium dolorem beatae ut. In, iste. Quisquam, blanditiis ratione eum iste dignissimos odit, animi reprehenderit perspiciatis libero adipisci natus vel itaque earum suscipit, repudiandae quibusdam cumque ipsum quas. Temporibus magnam facere illum consequuntur assumenda suscipit ipsum necessitatibus quasi iste blanditiis laudantium molestiae totam maiores, consequatur animi in culpa, tenetur nam, laborum nulla impedit eaque. Sunt, amet et! Quisquam sed quae omnis, delectus placeat ipsam esse consectetur eius provident officia molestias repudiandae quam? Assumenda eius, iste asperiores illo inventore corporis quo beatae omnis, alias atque labore id, dignissimos optio.
        <a href="" data-crsr='true'>hallo</a>
    </p>
    <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit voluptatem quas sunt accusantium dolorem beatae ut. In, iste. Quisquam, blanditiis ratione eum iste dignissimos odit, animi reprehenderit perspiciatis libero adipisci natus vel itaque earum suscipit, repudiandae quibusdam cumque ipsum quas. Temporibus magnam facere illum consequuntur assumenda suscipit ipsum necessitatibus quasi iste blanditiis laudantium molestiae totam maiores, consequatur animi in culpa, tenetur nam, laborum nulla impedit eaque. Sunt, amet et! Quisquam sed quae omnis, delectus placeat ipsam esse consectetur eius provident officia molestias repudiandae quam? Assumenda eius, iste asperiores illo inventore corporis quo beatae omnis, alias atque labore id, dignissimos optio.
        <a href="" data-crsr='true'>hallo</a>
    </p>
`;